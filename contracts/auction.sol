pragma solidity ^0.4.24;

//ERC Token Standard #20 Interface
 
contract ERC20Interface {
    function totalSupply() public  returns (uint);
    function balanceOf(address tokenOwner) public  returns (uint balance);
    function allowance(address tokenOwner, address spender) public  returns (uint remaining);
    function transfer(address to, uint tokens) public returns (bool success);
    function approve(address spender, uint tokens) public returns (bool success);
    function transferFrom(address from, address to, uint tokens) public returns (bool success);
 
    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint tokens);
}
 
 
//Contract function to receive approval and execute function in one call
 
contract ApproveAndCallFallBack {
    function receiveApproval(address from, uint256 tokens, address token, bytes data) public;
}
 
//Actual token contract
 
contract TAIToken is ERC20Interface {
    string public symbol;
    string public  name;
    uint8 public decimals;
    uint public _totalSupply;
    uint public number_of_items;
    uint public number_of_bidders;
    address public auctionOwner;
    struct item
    {
        string  name;
        address owner;
        uint high_bid;
        address high_bidder;
        uint high_bidder_id;
        uint bid_count;
    }
    
    // structure that stores bidder information
    struct bidder
    {
        uint bidder_id;
        address bidder_address;
        uint wallet_amount;
    }
    
    item [100] public items;
    bidder [100] public bidders;
    
    enum status {running,ended}
    status public bid_status;
 
    mapping(address => uint) balances;
    mapping(address => mapping(address => uint)) allowed;
 
   
    //modifier to ensure if the message sender is auctionOwner or not
    modifier isOwner(){
        require(msg.sender==auctionOwner);
        _;
    }
    
    //modifier to check if bidding process has ended
    modifier hasBidEnded()
    {
        require(bid_status==status.ended);
        _;
    }
    
    
     constructor() public {
        symbol = "TAI";
        name = "TrustAndIntegrity Coin";
        decimals = 2;
        _totalSupply = 100000;
        number_of_items=0;
        number_of_bidders=0;
        bid_status=status.running;
        auctionOwner=msg.sender;
        balances[auctionOwner] = _totalSupply;
        emit Transfer(address(0), auctionOwner, _totalSupply);
    }
    
    
    //The user needs to register in order to become a bidder and he needs to register with atleast 1 token
    function bidder_register() public payable {
        require(msg.value>0);
        number_of_bidders+=1;
        bidders[number_of_bidders].bidder_id=number_of_bidders;
        bidders[number_of_bidders].bidder_address=msg.sender;
        transferFrom(auctionOwner,msg.sender,100);
        
    }
    
    
    // Items are listed and the details of the items are stored in the struct item
    function list_item(string item_name) public payable returns (string){
        require(bid_status==status.running);
        items[number_of_items].name=item_name;
        items[number_of_items].owner=msg.sender;
        items[number_of_items].high_bid=0;
        items[number_of_items].bid_count=0;
        number_of_items+=1;
        return items[number_of_items-1].name;
    }

    function append(string a, string b) internal pure returns (string) {

        return string(abi.encodePacked(a, b));
    }
    
    function getAllItemNames() public view returns(string memory) {
        uint i;
        string memory itemNames;
        for(i=0; i<items.length; i++) {
            itemNames = append(itemNames, items[i].name);
            itemNames = append(itemNames, ",");
        }
        return itemNames;
    }
    
    function compareStrings(string memory a, string memory b) public pure returns (bool) 
    {
    return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }
    
    //The bidder can bid for a particular item using its name and the amount he wants to bid
    function make_bid(string item_to_bid, uint amount) public returns (string)
    {
        require(bid_status==status.running);
        for(uint j=1;j<=number_of_bidders;j++)
        {
            if(bidders[j].bidder_address==msg.sender)
            {
                uint idOfBidder=bidders[j].bidder_id;
                for(uint i=0;i<number_of_items;i++)
                {
                    if(compareStrings(items[i].name,item_to_bid))
                    {
                        if(balanceOf(msg.sender)>=amount)
                        {
                            if(amount>items[i].high_bid)
                            {
                                if(items[i].bid_count!=0)
                                {
                                    // If a bid higher than previous bid is placed, the tokens must be reverted back
                                    transferFrom(auctionOwner,items[i].high_bidder,items[i].high_bid);
                                }
                                items[i].high_bidder=msg.sender;
                                items[i].high_bid=amount;
                                items[i].high_bidder_id=idOfBidder;
                                //Every time a high bid is placed, the amount is temporarily transferred from bidder to auction owner account
                                transferFrom(msg.sender,auctionOwner,amount);
                                items[i].bid_count+=1;
                                return "bid accepted";
                             }
                            else
                            {
                                return "Bid is lower than present bid.";
                            }
                        }
                        else
                        {
                            return "Invalid bid! Not enough balance to make a bid.";
                        }
                    }
                }
                return "Chosen item is not listed.";
            }
        }
        return "bidder not registered";
    }
    
    
    // Bid can be ended only by the auction owner and it marks the end of auctioning process
    function endBid() public isOwner returns (string)
    {
        bid_status=status.ended;
            for(uint i=0;i<number_of_items;i++)
            {
                if(items[i].bid_count!=0)
                {
                //After a certain amount of time, the auctioner ends the auction and awards the item to the highest bidder at that time.
                    transferFrom(auctionOwner,items[i].owner,items[i].high_bid);
                }
            }
        return "Auction ended, go ahead and reveal winner";
    }
    
    
    //In order to reveal the winner of the auction, auctin owner needs to use revealWinner after the bidding has ended
    function revealWinner(string required_item) public isOwner hasBidEnded view returns (address) 
    {
        for(uint i=0;i<number_of_items;i++)
        {
            if(keccak256(bytes(items[i].name)) == keccak256(bytes(required_item)))
            {
                return items[i].high_bidder;
            }
        }
    }
    
    
    function viewBalance(address tokenOwner) public view returns (uint256 balance) {
        return balances[tokenOwner];
    }
    function totalSupply() public returns (uint) {
        return _totalSupply  - balances[address(0)];
    }
 
    function balanceOf(address tokenOwner) public returns (uint balance) {
        return balances[tokenOwner];
    }
 
    function transfer(address to, uint tokens) public returns (bool success) {
        balances[msg.sender] = balances[msg.sender]-tokens;
        balances[to] = balances[to]+tokens;
        emit Transfer(msg.sender, to, tokens);
        return true;
    }
 
    function approve(address spender, uint tokens) public returns (bool success) {
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        return true;
    }
 
    function transferFrom(address from, address to, uint tokens) public returns (bool success) {
        balances[from] = balances[from]-tokens;
        allowed[from][msg.sender] = allowed[from][msg.sender]-tokens;
        balances[to] = balances[to]+tokens;
        emit Transfer(from, to, tokens);
        return true;
    }
 
    function allowance(address tokenOwner, address spender) public returns (uint remaining) {
        return allowed[tokenOwner][spender];
    }
 
    function approveAndCall(address spender, uint tokens, bytes data) public returns (bool success) {
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender, spender, tokens);
        ApproveAndCallFallBack(spender).receiveApproval(msg.sender, tokens, this, data);
        return true;
    }
 
}
const Web3 =require('web3');

class TransactionChecker {
    web3 ;
    account ;

    constructor(projectId,account){
        this.web3=new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/"+projectId));
        this.account =account.toLowerCase();
    }

    async checkBlock(){
        let block =await this.web3.eth.getBlock('latest');
        let number =block.number;
        console.log("searching block"+number)

        if(block!=null && block.transactions != null){
            for(let txHash )
        }


    }
}
async function retryRequest(promiseFunc, nrOfRetries) {
    // Copy paste the code in your IDE and start writing your code from here.
    let cnt=0;
    for(let i=0;i<=nrOfRetries;i++){
        try{
            const res=await promiseFunc();
            return res;
        }catch(e){
            cnt++;
        }
        if(cnt===nrOfRetries){
            throw new Error
        }
    }
  }
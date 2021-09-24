function CreateResult(error,response) {
    results = {};
    if(error){
        results['message'] = 'Error occured';
        results['error'] = error;
    }
    else{
        results['message'] = "successful query";
        results['data'] = response;
    }
    return results;
}


module.exports = {
    CreateResult: CreateResult

}
  
exports.error = (res, err, code) => { 
    const error_code = code || 400;
    if (process.env.NODE_ENV === 'PROD') {
      res.status(error_code).send('Backend Error');
    }
    else {
        res.status(error_code).send(err);
    }
};
  
exports.success = (res, data, code) => {
    const ok_code = code || 200;
    res.status(ok_code).json(data);
};
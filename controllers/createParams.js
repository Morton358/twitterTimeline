export const createParams = (req, res) => {
    return new Promise((resolve, reject) => {
        if (req.params.username && req.params.id) {
            res.locals.params = {
                screen_name: req.params.username,
                max_id: req.params.id,
                count: 6,
                trim_user: true,
                exclude_replies: true
            };
            resolve({ message: 'You sucessfully create params' });
        } else if (req.params.username) {
            res.locals.params = {
                screen_name: req.params.username,
                count: 5,
                trim_user: true,
                exclude_replies: true
            };
            resolve({ message: 'You sucessfully create params' });
        } else {
            reject({ message: 'Fail create params' });
        }
    });
};

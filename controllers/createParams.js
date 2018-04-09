export const createParams = (req, res) => {
    return new Promise((resolve, reject) => {
        const username = req.params.username;
        if (username) {
            res.locals.params = {
                screen_name: username,
                max_id: 977979599102595100,
                count: 4,
                trim_user: true,
                exclude_replies: true
            };
            resolve({ message: 'You sucessfully create params' });
        } else {
            reject({ message: 'Fail create params' });
        }
    });
};

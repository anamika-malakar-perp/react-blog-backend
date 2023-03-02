const get = (req, res) => {
    res.send([
        {
            img: 'assets/user.png',
            name: 'Dmitry Nozhenko',
            created: 'Jan 28, 2019',
            time: '10 min read',
            shareIcons: true
        }
    ])
}

module.exports.apiController = get
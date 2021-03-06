const ItemService = require('../services/items');


const saveItem = (req, res) => {
    const data = req.body;

    ItemService.saveItem(data)
        .then((item) => {
            res.json({
                message: 'items and malls are saved successfully.',
                item
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message
            });
        });
};
const query = (req, res) => {
    const data = req.query;

    ItemService.get(data)
        .then((item) => {
            res.json({
                message: 'Item found',
                item
            });
        })
        .catch((err) => {
            res.status(404).json({
                message: err.message
            });
        });
};

const test = (req, res) => {
    ItemService.test()
        .then((msg) => {
            res.status(200).json({
                message: msg
            });
        })
        .catch((err) => {
            res.status(500).json({
                message: err.message
            });
        })
};


module.exports = {
    saveItem,
    query,
    test
};
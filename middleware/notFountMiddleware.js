export default () => {
    return (req, res) => {
        res.status(404).send('没有找到')
    }
}
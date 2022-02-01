/**
 * REST Controllers
 */



app.get('/', (req, res) => {
    res.send("Silence is golden")
})

app.get('api/users/:id', (req, res) => {

    res.json({name: 'ensar', surname: 'makas', id: req.params.id})
})

app.post('api/users/', (req, res) => {})

app.listen(port, () => {
    console.log('app listening the port of ' + port)
})

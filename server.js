import express from "express"
import React from "react"
import ReactDOMServer from "react-dom/server"
import Test from "./app/index"
import Login from "./app/login/login"

var app = express()
app.use(express.static("./app/**/public"))

app.get("/", (req, res) => {
	var view = ReactDOMServer.renderToString(<Test m={"Memo"} />)
	res.send(view)
})

app.get("/login", (req, res) => {
	var view = ReactDOMServer.renderToString(<Login />)
	
	res.send(view)
})

app.listen(4200)
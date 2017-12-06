import express from "express"
import React from "react"
import ReactDOMServer from "react-dom/server"
import Test from "./app/index"

var app = express()

app.get("/", (req, res) => {
	var view = ReactDOMServer.renderToString(<Test m={"Memo"} />)
	res.send(view)
})

app.listen(4200, () => console.log("Listening"))
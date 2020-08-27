const express = require("express");
const app = express();
const serveIndex = require("serve-index");

app.use(express.static("public"));
app.use(serveIndex("public", {icons:true}));




/*
app.get("/",function(req,res)
{
	res.send("Hello World!");
});
*/



/*
app.use(function(arg,res,next)
	{
		res.status(404).send("response");
	});

*/
app.listen(3000,()=>
	{
		console.log("ServerStarted at port 3000");
	}
);
const Koa = require("koa");
const app = new Koa();
const router = require("@koa/router")();
const bodyParser = require("koa-bodyparser");
const port = 5000;

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;

  console.log("Running Time :", ms, "'ms");
  console.log(`Method : ${ctx.method}\nURL : ${ctx.url}`);
});

router.get("/", function (ctx) {
  ctx.body = "Main Page";
  console.log("success");
});

router.get("/about", function (ctx) {
  ctx.body = "About Page";
  console.log("success");
});

router.get("/contact", function (ctx) {
  ctx.body = "Contact Page";
  console.log("success");
});

app.use(bodyParser()).use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Listenin to server ${port}`);
});

class MainController {
  async main(req, res) {
    res.json({
      controller: "MainController",
      action: "main"
    });
  }
}

export default new MainController();

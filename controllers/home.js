const HomeController = {
  Index: (req, res) => {
    res.render("home/index", { title: "Emily's Acebook" });
  },
};

module.exports = HomeController;

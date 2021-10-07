class HomeController {
  async index(req, res) {
    res.json({ message: 'Ok' });
  }
}

export default new HomeController();

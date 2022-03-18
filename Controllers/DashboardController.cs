using Charts.Models;
using Microsoft.AspNetCore.Mvc;

namespace Charts.Controllers
{
    public class DashboardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public JsonResult DataPastel()
        {
            SeriePastel serie = new SeriePastel();
            return Json(serie.GetDataDummy());
        }

        public JsonResult DataBarras()
        {
            SerieBarra serie = new SerieBarra();
            return Json(serie.GetDataDummy());
        }

        public JsonResult DataLineas()
        {
            SerieLinea serie = new SerieLinea();
            return Json(serie.GetDataDummy());
        }

        public JsonResult DataPicos()
        {
            SeriePico serie = new SeriePico();
            return Json(serie.GetDataDummy());
        }

        public JsonResult DataBurbujas()
        {
            SerieBurbuja serie = new SerieBurbuja();
            return Json(serie.GetDataDummy());
        }

        public JsonResult DataUpdate()
        {
            SerieUpdate serie = new SerieUpdate();
            return Json(serie.GetDataDummy());
        }

        public JsonResult DataPiramide()
        {
            SeriePiramide serie = new SeriePiramide();
            return Json(serie.GetDataDummy());
        }

        public JsonResult DataBarrasHor()
        {
            SerieBarraHor serie = new SerieBarraHor();
            return Json(serie.GetDataDummy());
        }
    }
}

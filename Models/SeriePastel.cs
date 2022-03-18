using System.Collections.Generic;

namespace Charts.Models
{
    public class SeriePastel
    {
        public string name { get; set; }
        public double y { get; set; }
        public bool sliced { get; set; }
        public bool selected { get; set; }

        public SeriePastel()
        {

        }

        public SeriePastel(string name, double y, bool sliced = false, bool selected = false)
        {
            this.name = name;
            this.y = y;
            this.sliced = sliced;
            this.selected = selected;
        }

        public List<SeriePastel> GetDataDummy()
        {
            List<SeriePastel> lista = new List<SeriePastel>();
            lista.Add(new SeriePastel("Angular", 45));
            lista.Add(new SeriePastel("VueJS", 50));
            lista.Add(new SeriePastel("ReactJS", 60));
            lista.Add(new SeriePastel("CSS", 34));
            lista.Add(new SeriePastel("HTML", 20));
            return lista;
        }

    }
}

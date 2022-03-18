namespace Charts.Models
{
    public class SerieBarra
    {
        public SerieBarra()
        {

        }

        public object[] GetDataDummy()
        {
            object[] data = new object[5];
            data[0] = new object[] { "Angular", 45 };
            data[1] = new object[] { "VueJS", 50};
            data[2] = new object[] { "ReactJS", 66 };
            data[3] = new object[] { "CSS", 30 };
            data[4] = new object[] { "HTML", 28 };

            return data;
        }
    }
}

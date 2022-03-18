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
            data[0] = new object[] { "Tokyo", 37 };
            data[1] = new object[] { "Delhi", 28};
            data[2] = new object[] { "Shanghai", 25 };
            data[3] = new object[] { "Sao Paulo", 21 };
            data[4] = new object[] { "Mexico", 20 };

            return data;
        }
    }
}

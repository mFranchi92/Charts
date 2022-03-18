namespace Charts.Models
{
    public class SeriePiramide
    {
        public SeriePiramide()
        {

        }

        public object[] GetDataDummy()
        {
            object[] data = new object[5];
            data[0] = new object[] { "Strongly Agree", 45 };
            data[1] = new object[] { "Agree", 50 };
            data[2] = new object[] { "Neutral", 66 };
            data[3] = new object[] { "Disagree", 30 };
            data[4] = new object[] { "Strongly Disagree", 28 };

            return data;
        }
    }
}

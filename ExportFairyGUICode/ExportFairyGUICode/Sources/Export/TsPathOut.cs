using System;
using System.Collections.Generic;
using System.Text;


public static class TsPathOut
{
    public static string ComponentStruct
    {
        get
        {
            return Setting.Options.codePath + "/TS/{0}/ComponentStructs/{1}Struct.ts";
        }
    }


    public static string ComponentExtend
    {
        get
        {
            return Setting.Options.codePath + "/TS/{0}/ComponentExtends/{1}.ts";
        }
    }
}
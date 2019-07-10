using System;
using System.Collections.Generic;
using System.Text;

public class TsPathTemplate
{

    public static string ComponentStruct
    {
        get
        {
            return Setting.EngineSetting.templateDir + "/TS/ComponentStruct.txt";
        }
    }

    public static string ComponentExtend
    {
        get
        {
            return Setting.EngineSetting.templateDir + "/TS/ComponentExtend.txt";
        }
    }

    public static string Binder
    {
        get
        {
            return Setting.EngineSetting.templateDir + "/TS/Binder.txt";
        }
    }

    public static string GuiPackageNames
    {
        get
        {
            return Setting.EngineSetting.templateDir + "/TS/GuiPackageNames.txt";
        }
    }

    public static string GuiBinderList
    {
        get
        {
            return Setting.EngineSetting.templateDir + "/TS/GuiBinderList.txt";
        }
    }


    public static string SoundKey
    {
        get
        {
            return Setting.EngineSetting.templateDir + "/TS/SoundKey.txt";
        }
    }
}
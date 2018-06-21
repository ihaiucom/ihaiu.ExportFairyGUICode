using System;
using System.Collections.Generic;
using System.Text;


public enum ResourceComponentType
{
    component,
    image,
    movieclip,
    swf,
    font,
}

public static class ResourceComponentTypeHelper
{
    public static ResourceComponentType GetResourceComponentTypeByName(this string name)
    {
        return (ResourceComponentType)Enum.Parse(typeof(ResourceComponentType), name);
    }
}
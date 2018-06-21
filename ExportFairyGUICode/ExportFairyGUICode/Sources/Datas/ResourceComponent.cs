using System;
using System.Collections.Generic;
using System.Text;


public class ResourceComponent
{
    public Package package;

    public ResourceComponentType type;
    public string id;
    public string name;
    public string path;
    public bool exported;

    public string className;
    // 继承
    public string extention;
    public string extendClassName;

    // 控制器列表
    public List<Node> controllerList = new List<Node>();

    // 动效列表
    public List<Node> transitionList = new List<Node>();

    // 显示列表
    public List<Node> displayList = new List<Node>();

}
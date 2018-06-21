﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Text;


public class ResourceComponent
{
    public Package package;

    public ResourceComponentType type;
    public string id;
    public string name;
    public string path;
    public bool exported;

    // 继承
    public string extention;

    // 控制器列表
    public List<Node> controllerList = new List<Node>();

    // 动效列表
    public List<Node> transitionList = new List<Node>();

    // 显示列表
    public List<Node> displayList = new List<Node>();

    // 显示列表--Component
    public List<ComponentNode> componentList = new List<ComponentNode>();

    public void AddNode(ComponentNode node)
    {
        node.parent = this;
        componentList.Add(node);
    }

    // URL
    public string URL
    {
        get
        {
            return $"uiL://{package.id}{id}";
        }
    }

    // 类名
    private string _className;
    public string className
    {
        get
        {
            if(string.IsNullOrEmpty(_className))
            {
                _className = Path.GetFileNameWithoutExtension(name).FirstUpper();
            }
            return _className;
        }

        set
        {
            _className = value;
        }
    }

    // 继承类 名
    private string _extendClassName;
    public string extendClassName
    {
        get
        {
            if (string.IsNullOrEmpty(_extendClassName))
            {
                _extendClassName = fairygui.ExtendType.GetExtendClass(extention);
            }
            return _extendClassName;
        }


        set
        {
            _extendClassName = value;
        }
    }

    // 包名
    public string packageName
    {
        get
        {
            return package.name;
        }
    }

    // 命名空间
    private string _nameSpace;
    public string nameSpace
    {
        get
        {
            if (string.IsNullOrEmpty(_nameSpace))
            {
                _nameSpace = packageName;
                if(!string.IsNullOrEmpty(Setting.Options.codeNamespace))
                    _nameSpace = Setting.Options.codeNamespace + "." + _nameSpace;
            }
            return _nameSpace;
        }


        set
        {
            _nameSpace = value;
        }
    }


    // 继承类
    public string classNameFGUI
    {
        get
        {
            return extendClassName;
        }
    }



    // 扩展类名
    public string classNameExtend
    {
        get
        {
            return className;
        }
    }



    // 类全名,包含命名空间
    public string classNameFull
    {
        get
        {
            return nameSpace + "." + classNameExtend;
        }
    }


    // 结构类名
    private string _classNameStruct;
    public string classNameStruct
    {
        get
        {
            return className + "Struct";
        }
    }

}
using System;
using System.Collections.Generic;
using System.Text;
using System.Xml;

public class ComponentReader
{
    public static void Load(string path,  ResourceComponent resourceComponent)
    {
        Console.WriteLine(path);
        XmlDocument xmlDocument = new XmlDocument();
        xmlDocument.Load(path);


        XmlNode component = xmlDocument.SelectSingleNode(@"component");

        // 继承
        string extention = fairygui.ExtendType.Component;
        if(component.Attributes["extention"] != null)
        {
            extention = component.Attributes.GetNamedItem("extention").InnerText;
        }
        resourceComponent.extention = extention;


        XmlNodeList xmlNodeList = component.ChildNodes;

        foreach (XmlNode node in xmlNodeList)
        {

            switch(node.Name)
            {
                // 控制器
                case fairygui.NodeName.controller:
                    resourceComponent.controllerList.Add(new Node() { name = node .Attributes.GetNamedItem("name").InnerText, type = fairygui.CommonName.Controller});
                    break;
                // 动效
                case fairygui.NodeName.transition:
                    resourceComponent.transitionList.Add(new Node() { name = node.Attributes.GetNamedItem("name").InnerText, type = fairygui.CommonName.Transition });
                    break;

                case fairygui.NodeName.displayList:
                    XmlNodeList displayNodeList = node.ChildNodes;
                    foreach (XmlNode displayNode in displayNodeList)
                    {
                        string nodeName = displayNode.Attributes.GetNamedItem("name").InnerText;
                        switch (displayNode.Name)
                        {
                            // 图片
                            case fairygui.NodeName.image:
                                resourceComponent.displayList.Add(new Node() { name = nodeName, type = fairygui.CommonName.GImage });
                                break;
                            // 文本
                            case fairygui.NodeName.text:
                                bool input = false;
                                if (displayNode.Attributes["input"] != null)
                                {
                                    input = displayNode.Attributes.GetNamedItem("input").InnerText == "true";
                                }

                                if(input)
                                {
                                    resourceComponent.displayList.Add(new Node() { name = nodeName, type = fairygui.CommonName.GTextInput });
                                }
                                else
                                {
                                    resourceComponent.displayList.Add(new Node() { name = nodeName, type = fairygui.CommonName.GTextField });
                                }
                                break;

                            // 富文本
                            case fairygui.NodeName.richtext:
                                resourceComponent.displayList.Add(new Node() { name = nodeName, type = fairygui.CommonName.GRichTextField });
                                break;

                            // 图形
                            case fairygui.NodeName.graph:
                                resourceComponent.displayList.Add(new Node() { name = nodeName, type = fairygui.CommonName.GGraph });
                                break;

                            // 组
                            case fairygui.NodeName.group:
                                bool advanced = false;
                                if (displayNode.Attributes["advanced"] != null)
                                {
                                    advanced = displayNode.Attributes.GetNamedItem("advanced").InnerText == "true";
                                }

                                if(advanced)
                                    resourceComponent.displayList.Add(new Node() { name = nodeName, type = fairygui.CommonName.GGroup });
                                break;

                            // 装载器
                            case fairygui.NodeName.loader:
                                resourceComponent.displayList.Add(new Node() { name = nodeName, type = fairygui.CommonName.GLoader });
                                break;

                            // 列表
                            case fairygui.NodeName.list:
                                resourceComponent.displayList.Add(new Node() { name = nodeName, type = fairygui.CommonName.GList });
                                break;

                            // 序列帧动画
                            case fairygui.NodeName.movieclip:
                                resourceComponent.displayList.Add(new Node() { name = nodeName, type = fairygui.CommonName.GMovieClip });
                                break;

                            // 自定义组件
                            case fairygui.NodeName.component:

                                ResourceComponent com = null;
                                resourceComponent.displayList.Add(new ComponentNode() { name = nodeName, type = fairygui.CommonName.GComponent, resourceComponent = com });
                                break;

                        }
                    }
                    break;
            }
            Console.WriteLine(node.Name);
        }

    }
}
using System;
using System.Collections.Generic;
using System.Text;
using System.Xml;

public class ComponentReader
{
    public static void Load(string path,  ResourceComponent resourceComponent)
    {
        Console.WriteLine("ComponentReader:" + path);
        XmlDocument xmlDocument = new XmlDocument();
        xmlDocument.Load(path);


        XmlNode component = xmlDocument.SelectSingleNode(@"component");

        // 继承
        string extention = fgui.ExtendType.Component;
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
                case fgui.NodeName.controller:
                    resourceComponent.controllerList.Add(new Node() { name = node .Attributes.GetNamedItem("name").InnerText, type = fgui.CommonName.Controller});
                    break;
                // 动效
                case fgui.NodeName.transition:
                    resourceComponent.transitionList.Add(new Node() { name = node.Attributes.GetNamedItem("name").InnerText, type = fgui.CommonName.Transition });
                    break;

                case fgui.NodeName.displayList:
                    XmlNodeList displayNodeList = node.ChildNodes;
                    foreach (XmlNode displayNode in displayNodeList)
                    {

                        string pkg = null;
                        string src = null;
                        string nodeName = displayNode.Attributes.GetNamedItem("name").InnerText;
                        switch (displayNode.Name)
                        {
                            // 图片
                            case fgui.NodeName.image:

                                pkg = null;
                                if (displayNode.Attributes["pkg"] != null)
                                {
                                    pkg = displayNode.Attributes.GetNamedItem("pkg").InnerText;
                                }

                                src = null;
                                if (displayNode.Attributes["src"] != null)
                                {
                                    src = displayNode.Attributes.GetNamedItem("src").InnerText;
                                }
                                resourceComponent.displayList.Add(new Node() { name = nodeName, type = fgui.CommonName.GImage, pkg= pkg, src = src });
                                break;
                            // 文本
                            case fgui.NodeName.text:
                                bool input = false;
                                if (displayNode.Attributes["input"] != null)
                                {
                                    input = displayNode.Attributes.GetNamedItem("input").InnerText == "true";
                                }

                                if(input)
                                {
                                    resourceComponent.displayList.Add(new Node() { name = nodeName, type = fgui.CommonName.GTextInput });
                                }
                                else
                                {
                                    resourceComponent.displayList.Add(new Node() { name = nodeName, type = fgui.CommonName.GTextField });
                                }
                                break;

                            // 富文本
                            case fgui.NodeName.richtext:
                                resourceComponent.displayList.Add(new Node() { name = nodeName, type = fgui.CommonName.GRichTextField });
                                break;

                            // 图形
                            case fgui.NodeName.graph:
                                resourceComponent.displayList.Add(new Node() { name = nodeName, type = fgui.CommonName.GGraph });
                                break;

                            // 组
                            case fgui.NodeName.group:
                                bool advanced = false;
                                if (displayNode.Attributes["advanced"] != null)
                                {
                                    advanced = displayNode.Attributes.GetNamedItem("advanced").InnerText == "true";
                                }

                                if(advanced)
                                    resourceComponent.displayList.Add(new Node() { name = nodeName, type = fgui.CommonName.GGroup });
                                break;

                            // 装载器
                            case fgui.NodeName.loader:
                                resourceComponent.displayList.Add(new Node() { name = nodeName, type = fgui.CommonName.GLoader });
                                break;

                            // 列表
                            case fgui.NodeName.list:
                                resourceComponent.displayList.Add(new Node() { name = nodeName, type = fgui.CommonName.GList });
                                break;

                            // 序列帧动画
                            case fgui.NodeName.movieclip:
                                resourceComponent.displayList.Add(new Node() { name = nodeName, type = fgui.CommonName.GMovieClip });
                                break;

                            // 自定义组件
                            case fgui.NodeName.component:
                                pkg = null;
                                if (displayNode.Attributes["pkg"] != null)
                                {
                                    pkg = displayNode.Attributes.GetNamedItem("pkg").InnerText;
                                }
                                resourceComponent.AddNode(new ComponentNode() { name = nodeName, type = fgui.CommonName.GComponent,
                                    pkg = pkg,
                                    src = displayNode.Attributes.GetNamedItem("src").InnerText
                                });
                                break;

                        }
                    }
                    break;
            }
        }

    }
}
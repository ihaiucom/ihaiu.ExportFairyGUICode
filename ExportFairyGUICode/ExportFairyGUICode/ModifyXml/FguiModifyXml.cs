using System;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Xml;
using System.Text.RegularExpressions;

public class FguiModifyXml
{
    public void LoadProject(string projectPath)
    {
        string root = projectPath + "/assets";
        string[] files = Directory.GetFiles(root, "*.xml", SearchOption.AllDirectories);

        foreach(string file in files)
        {
            if (Path.GetFileName(file) == "package.xml")
                continue;

            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine(file);
            Console.WriteLine();

            LoadXml(file);
            Console.WriteLine();
            Console.WriteLine();
        }
    }

    static Regex NumberTextRegex1 = new Regex("^[\u4e00-\u9fa5a-zA-Z]+");
    static Regex NumberTextRegex2 = new Regex("^[0-9./%]+[a-zA-Z]?$");

    public void LoadXml(string path)
    {
        XmlDocument xmlDocument = new XmlDocument();
        xmlDocument.Load(path);


        XmlNode component = xmlDocument.SelectSingleNode(@"component/displayList");
        if (component == null)
            return;

        XmlNodeList displayNodeList = component.ChildNodes;

        bool hasChange = false;
        string text;

        foreach (XmlElement displayNode in displayNodeList)
        {

            bool isInput = false;
            bool isNumberText = false;
            switch (displayNode.Name)
            {
                // 文本
                case fgui.NodeName.text:

                    if (displayNode.HasAttribute("input"))
                    {
                        text = displayNode.GetAttribute("input");

                        if (text == "true")
                            isInput = true;
                    }

                    if(!isInput)
                    {
                        if (displayNode.HasAttribute("text"))
                        {
                            text = displayNode.GetAttribute("text");
                            if(!string.IsNullOrEmpty(text))
                            {
                                text = text.Trim();

                                if (!string.IsNullOrEmpty(text))
                                {
                                    if ( NumberTextRegex2.IsMatch(text))
                                    {
                                        Console.WriteLine(text);
                                        isNumberText = true;
                                    }
                                }
                            }
                        }
                    }
                    break;

                // 富文本
                case fgui.NodeName.richtext:

                    if (displayNode.HasAttribute("text"))
                    {
                        text = displayNode.GetAttribute("text");
                        if (!string.IsNullOrEmpty(text))
                        {
                            text = text.Trim();

                            if (!string.IsNullOrEmpty(text))
                            {
                                if (NumberTextRegex2.IsMatch(text))
                                {
                                    Console.WriteLine(text);
                                    isNumberText = true;
                                }
                            }
                        }
                    }
                    break;



            }

            if(isNumberText)
            {
                displayNode.SetAttribute("isNumberText", "true");
                hasChange = true;
            }
            else if(displayNode.HasAttribute("isNumberText"))
            {
                displayNode.RemoveAttribute("isNumberText");
                hasChange = true;
            }
        }

        if(hasChange)
        {
            xmlDocument.Save(path);
        }


    }
}
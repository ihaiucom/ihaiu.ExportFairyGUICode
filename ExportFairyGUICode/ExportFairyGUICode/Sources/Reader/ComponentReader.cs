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

        XmlNodeList xmlNodeList = component.ChildNodes;

        foreach (XmlNode node in xmlNodeList)
        {
            switch(node.Name)
            {
                case fairygui.NodeName.controller:
                    break;


            }
            Console.WriteLine(node.Name);
        }

    }
}
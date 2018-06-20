using System;
using System.Collections.Generic;
using System.Text;
using System.Xml;
using System.IO;

public class PackageReader
{
    public static Package Load(string path)
    {
        Package package = new Package();
        package.rootPath = Path.GetDirectoryName(path);

        XmlDocument xmlDocument = new XmlDocument();
        xmlDocument.Load(path);
        XmlNode packageDescription = xmlDocument.SelectSingleNode(@"packageDescription");
        XmlNode publish = xmlDocument.SelectSingleNode(@"packageDescription/publish");
        package.id = packageDescription.Attributes.GetNamedItem("id").InnerText;
        package.name = publish.Attributes.GetNamedItem("name").InnerText;
        package.genCode = publish.Attributes.GetNamedItem("genCode").InnerText == "true";

        XmlNodeList xmlNodeList = xmlDocument.SelectSingleNode("packageDescription/resources").ChildNodes;

        foreach (XmlNode node in xmlNodeList)
        {
            bool exported = false;
            if (node.Attributes["exported"] != null)
            {
                exported = node.Attributes.GetNamedItem("exported").InnerText == "true";
            }

            ResourceComponent item = new ResourceComponent()
            {
                id = node.Attributes.GetNamedItem("id").InnerText,
                name = node.Attributes.GetNamedItem("name").InnerText,
                path = node.Attributes.GetNamedItem("path").InnerText,
                exported = exported,
                type = node.Name.GetResourceComponentTypeByName()
            };

            package.AddResource(item);
        }

        return package;
    }
}

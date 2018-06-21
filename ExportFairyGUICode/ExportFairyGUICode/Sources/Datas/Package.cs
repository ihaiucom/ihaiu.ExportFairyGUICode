using ETModel;
using System;
using System.Collections.Generic;
using System.Text;


public class Package
{
    public string rootPath;
    public string id;
    public string name;
    public bool genCode;

    QueueDictionary<string, ResourceComponent> resources = new QueueDictionary<string, ResourceComponent>();
    List<ResourceComponent> components = new List<ResourceComponent>();
    List<ResourceComponent> exportComponents = new List<ResourceComponent>();

    public List<ResourceComponent> ComponentList
    {
        get
        {
            return components;
        }
    }

    public void AddResource(ResourceComponent res)
    {
        res.package = this;

        resources.Enqueue(res.id, res);
        if(res.type == ResourceComponentType.component)
        {
            components.Add(res);

            if (res.exported)
            {
                exportComponents.Add(res);
            }
        }
    }

    public ResourceComponent GetResource(string resId)
    {
        if (resources.ContainsKey(resId))
            return resources[resId];
        return null;
    }

}
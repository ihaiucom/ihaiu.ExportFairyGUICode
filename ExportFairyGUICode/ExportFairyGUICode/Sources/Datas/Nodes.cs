using System;
using System.Collections.Generic;
using System.Text;

public class Node
{
    public string name;
    public string type;
}


public class ComponentNode : Node
{
    public ResourceComponent resourceComponent;
}
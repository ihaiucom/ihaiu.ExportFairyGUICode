/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


export default class NumericInputStruct extends fairygui.GLabel
{
	public m_c1 : fairygui.Controller;
	public m_grayed : fairygui.Controller;
	public m_holder : fairygui.GGraph;
	public m_title : fairygui.GTextInput;

	
	public static URL:string = "ui://s1yj9w6mp7th2l";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():NumericInput {
		return <NumericInput><any>(fairygui.UIPackage.createObject("BlackSkin","NumericInput"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_c1 = this.getController("c1");
		this.m_grayed = this.getController("grayed");

		
		this.m_holder = <fairygui.GGraph><any>(this.getChild("holder"));
		this.m_title = <fairygui.GTextInput><any>(this.getChild("title"));
		
		
	}
}
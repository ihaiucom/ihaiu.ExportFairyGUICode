/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


export default class GripButton_HZStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;

	
	public static URL:string = "ui://s1yj9w6mp7th31";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():GripButton_HZ {
		return <GripButton_HZ><any>(fairygui.UIPackage.createObject("BlackSkin","GripButton_HZ"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		
		
	}
}
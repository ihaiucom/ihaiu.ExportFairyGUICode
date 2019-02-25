/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


export default class ScrollBar_arrowStruct extends fairygui.GButton
{
	public m_button : fairygui.Controller;
	public m_icon : fairygui.GLoader;

	
	public static URL:string = "ui://stv9j6m6raoc3";
	
	public static DependPackages:string[] = ["BlueSkin"];

	
	public static createInstance():ScrollBar_arrow {
		return <ScrollBar_arrow><any>(fairygui.UIPackage.createObject("BlueSkin","ScrollBar_arrow"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		
		this.m_button = this.getController("button");

		
		this.m_icon = <fairygui.GLoader><any>(this.getChild("icon"));
		
		
	}
}
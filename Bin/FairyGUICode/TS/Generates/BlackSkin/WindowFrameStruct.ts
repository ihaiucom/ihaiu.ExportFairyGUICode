/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


export default class WindowFrameStruct extends fairygui.GLabel
{
	public m_dragArea : fairygui.GGraph;
	public m_title : fairygui.GTextField;
	public m_contentArea : fairygui.GGraph;

	
	public static URL:string = "ui://s1yj9w6mp7th3f";
	
	public static DependPackages:string[] = ["BlackSkin"];

	
	public static createInstance():WindowFrame {
		return <WindowFrame><any>(fairygui.UIPackage.createObject("BlackSkin","WindowFrame"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_dragArea = <fairygui.GGraph><any>(this.getChild("dragArea"));
		this.m_title = <fairygui.GTextField><any>(this.getChild("title"));
		this.m_contentArea = <fairygui.GGraph><any>(this.getChild("contentArea"));
		
		
	}
}
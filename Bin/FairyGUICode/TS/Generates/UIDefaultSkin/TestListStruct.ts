/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////


export default class TestListStruct extends fairygui.GComponent
{
	public m_list : fairygui.GList;

	
	public static URL:string = "ui://snq31xvroett4e";
	
	public static DependPackages:string[] = ["UIDefaultSkin"];

	
	public static createInstance():TestList {
		return <TestList><any>(fairygui.UIPackage.createObject("UIDefaultSkin","TestList"));
	}

	

	public constructor() 
	{
		super();
	}

	protected constructFromXML(xml: any): void 
	{
		super.constructFromXML(xml);
		

		
		this.m_list = <fairygui.GList><any>(this.getChild("list"));
		
		
	}
}
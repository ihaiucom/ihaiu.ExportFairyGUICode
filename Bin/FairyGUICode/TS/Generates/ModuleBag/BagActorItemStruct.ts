/////////////////////////////////////
// ihaiu.ExportFairyGUICode生成
// http://blog.ihaiu.com
/////////////////////////////////////

import BagActorItem from "../../Extends/ModuleBag/BagActorItem";

export default class BagActorItemStruct extends fgui.GComponent
{
	public m_item : fgui.GObject;

	
	public static URL:string = "ui://4mjxxvpqncg94";
	
	public static DependPackages:string[] = ["ModuleBag"];

	
	public static createInstance():BagActorItem {
		return <BagActorItem><any>(fgui.UIPackage.createObject("ModuleBag","BagActorItem"));
	}

	

	public constructor() 
	{
		super();
	}

	protected onConstruct(): void 
	{
		

		
		this.m_item = <fgui.GObject><any>(this.getChild("item"));
		
		

		this.constructFromXML();
	}


	protected constructFromXML(xml?: any): void 
	{

	}
}
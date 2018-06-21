/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class TestList extends fairygui.GComponent {

		public list:fairygui.GList;

		public static URL:string = "ui://snq31xvroett4e";

		public static createInstance():TestList {
			return <TestList><any>(fairygui.UIPackage.createObject("UIDefaultSkin","TestList"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.list = <fairygui.GList><any>(this.getChild("list"));
		}
	}
}
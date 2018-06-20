/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class PopupMenu1 extends fairygui.GComponent {

		public n1:fairygui.GImage;
		public list:fairygui.GList;

		public static URL:string = "ui://snq31xvrsfsc49";

		public static createInstance():PopupMenu1 {
			return <PopupMenu1><any>(fairygui.UIPackage.createObject("UIDefaultSkin","PopupMenu1"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.n1 = <fairygui.GImage><any>(this.getChild("n1"));
			this.list = <fairygui.GList><any>(this.getChild("list"));
		}
	}
}
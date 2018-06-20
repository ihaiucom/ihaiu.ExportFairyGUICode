/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.UIDefaultSkin {

	export class ComComboBox_popup extends fairygui.GComponent {

		public n1:fairygui.GImage;
		public list:fairygui.GList;

		public static URL:string = "ui://snq31xvrsfsc3z";

		public static createInstance():ComComboBox_popup {
			return <ComComboBox_popup><any>(fairygui.UIPackage.createObject("UIDefaultSkin","ComComboBox_popup"));
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
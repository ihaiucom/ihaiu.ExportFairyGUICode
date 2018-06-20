/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlackSkin {

	export class ComboBoxPopup extends fairygui.GComponent {

		public n0:fairygui.GImage;
		public list:fairygui.GList;

		public static URL:string = "ui://s1yj9w6mp7thf";

		public static createInstance():ComboBoxPopup {
			return <ComboBoxPopup><any>(fairygui.UIPackage.createObject("BlackSkin","ComboBoxPopup"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.n0 = <fairygui.GImage><any>(this.getChild("n0"));
			this.list = <fairygui.GList><any>(this.getChild("list"));
		}
	}
}
/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module fgui.BlueSkin {

	export class ComboBox_popup extends fairygui.GComponent {

		public n0:fairygui.GImage;
		public list:fairygui.GList;

		public static URL:string = "ui://stv9j6m6raoc7";

		public static createInstance():ComboBox_popup {
			return <ComboBox_popup><any>(fairygui.UIPackage.createObject("BlueSkin","ComboBox_popup"));
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
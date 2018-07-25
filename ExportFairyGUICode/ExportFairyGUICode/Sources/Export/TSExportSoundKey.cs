using BeardedManStudios.Templating;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;


public class TSExportSoundKey
{
    public static void Export(Package package)
    {

        List<object[]> coms = new List<object[]>();

        foreach (ResourceComponent component in package.sounds)
        {
            if (!component.exported)
                continue;

            coms.Add(new object[] { component.classNameExtend, component.name, component.id, Path.GetExtension(component.name) });
        }


        TemplateSystem template = new TemplateSystem(File.ReadAllText(TsPathTemplate.SoundKey));
        template.AddVariable("packageName", package.name);
        template.AddVariable("packageId", package.id);
        template.AddVariable("list", coms.ToArray());
        string content = template.Parse();
        string path = TsPathOut.SoundKey;

        PathHelper.CheckPath(path);
        File.WriteAllText(path, content);
    }
}


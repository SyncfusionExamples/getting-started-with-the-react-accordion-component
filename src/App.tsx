import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective, TreeViewComponent} from '@syncfusion/ej2-react-navigations';
import './App.css';
function App() {
  const localData: { [key: string]: Object }[] = [
    {
        id: '01', name: 'Local Disk (C:)',
        subChild: [
            {
                id: '01-01', name: 'Program Files'
           },
            {
                id: '01-02', name: 'Users'
             },
            {
                id: '01-03', name: 'Windows'
            },
        ]
    },
    {
        id: '02', name: 'Local Disk (D:)',
        subChild: [
            {
                id: '02-01', name: 'Personals',
            },
            {
                id: '02-02', name: 'Projects',
            },
        ]
    },
    {
        id: '03', name: 'Local Disk (E:)', icon: 'folder',
        subChild: [
            {
                id: '03-01', name: 'Pictures',
                subChild: [
                    { id: '03-01-01', name: 'Wind.jpg' },
                    { id: '03-01-02', name: 'Stone.jpg' }
                ]
            },
            {
                id: '03-02', name: 'Documents',
                subChild: [
                  
                    { id: '03-02-01', name: 'Global Warming.ppt' },
                    { id: '03-02-02', name: 'Social Network.pdf' },
                ]
            },
            {
                id: '03-03', name: 'Study Materials',
                subChild: [
                    { id: '03-03-01', name: 'UI-Guide.pdf' },
                    { id: '03-03-02', name: 'Tutorials.zip' },
                 
                ]
            },
        ]
    }
  ];
  const fields = { dataSource: localData, id: 'id', text: 'name', child: 'subChild' };
  const treeViewTemplate = ():JSX.Element =>{
    return(
      <TreeViewComponent fields={fields}></TreeViewComponent>
    );
  }
  return (
    <div className="App">
     <AccordionComponent width='500px' expandMode='Single'>
     <AccordionItemsDirective>
       <AccordionItemDirective header='TreeView' content={treeViewTemplate}/>
     </AccordionItemsDirective>
     </AccordionComponent>
    </div>
  );
}
export default App;

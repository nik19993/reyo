import React from "react";
import Logo from "./components/Logo";
import InputSection from "./components/InputSection";
import ContentBlock from "./components/ContentBlockApi";
import DataTable from "./components/DataTable";
import { useViewModel } from "./components/hooks/useViewModal";
import ContentBlockApi from "./components/ContentBlockApi";
import ContentBlockDB from "./components/ContentBlockDB";

export default function App() {
    const vm = useViewModel();

    return (
        <div className="min-h-screen flex flex-col   p-4">
            <div className="w-full max-w-3xl mx-auto">
                <Logo />
                <InputSection
                    cityRef={vm.cityRef}
                    loadDataByApi={vm.loadDataByApi}
                    loadDataByDB={vm.loadDataByDB}
                    fieldError={vm.fieldError}
                />
                {vm.list.length > 0 && vm.type === "api" ? (
                    <ContentBlockApi
                        parseListApi={vm.parseListApi}
                        saveData={vm.saveData}
                    />
                ) : null}
                {vm.list.length > 0 && vm.type === "db" ? (
                    <ContentBlockDB parseListDB={vm.parseListDB} />
                ) : null}
                {vm.list.length > 0 && <DataTable list={vm.list} />}
            </div>
        </div>
    );
}

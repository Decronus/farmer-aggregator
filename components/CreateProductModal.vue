<script lang="ts" setup>
import { createProduct } from "@/api/users";

const emit = defineEmits(["updateVisible", "update:modelValue"]);
const props = defineProps(["modelValue"]);

interface Form {
    name: string;
    price: string;
}
const form = reactive<Form>({
    name: "",
    price: "",
});

async function handleCreateProduct() {
    try {
        const { data } = await createProduct(7, form);
        emit("update:modelValue", false);
        console.log("data", data.value);
    } catch (err) {
        console.error(err);
    }
}
</script>

<template>
    <el-dialog :model-value="modelValue" title="Добавление продукта" @closed="emit('update:modelValue', false)">
        <el-form :model="form">
            <el-form-item label="Название продукта">
                <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Цена">
                <el-input v-model="form.price" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="emit('update:modelValue', false)">Cancel</el-button>
                <el-button type="primary" @click="handleCreateProduct">Confirm</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<style lang="scss" scoped></style>

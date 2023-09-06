<script lang="ts" setup>
import { ref, computed, defineEmits } from "vue";

const emit = defineEmits(["updateVisible", "update:modelValue"]);
const props = defineProps(["modelValue"]);
</script>

<template>
    <el-dialog :model-value="modelValue" title="Добавление продукта" @closed="emit('update:modelValue', false)">
        <!-- <el-form :model="form">
            <el-form-item label="Promotion name" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Zones" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="Please select a zone">
                    <el-option label="Zone No.1" value="shanghai" />
                    <el-option label="Zone No.2" value="beijing" />
                </el-select>
            </el-form-item>
        </el-form> -->
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="emit('update:modelValue', false)">Cancel</el-button>
                <el-button type="primary" @click="emit('update:modelValue', false)">Confirm</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<style lang="scss" scoped></style>

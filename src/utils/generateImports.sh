#!/bin/bash

# Verificar si se proporcionaron los argumentos necesarios
if [ "$#" -ne 3 ]; then
  echo "Uso: $0 <directorio_de_entrada> <archivo_de_salida> <extension_de_archivo>"
  exit 1
fi

# Directorio que contiene los archivos
input_directory=$1

# Archivo de salida
output_file=$2

# Extensión de los archivos
file_extension=$3

# Guardar el directorio actual
current_directory=$(pwd)

# Cambiar al directorio de entrada
cd "$input_directory" || { echo "No se puede cambiar al directorio $input_directory"; exit 1; }

# Limpiar el archivo de salida
echo "" > "$output_file"

# Generar las importaciones
echo "Generando importaciones..."
for file in $file_extension; do
  filename=$(basename -- "$file")
  variable_name=$(echo "$filename" | sed -e "s/\.[^.]*$//" -e 's/\-/_/g')
  echo "import $variable_name from './$filename';" >> "$output_file"
done

# Generar las exportaciones
echo "Generando exportaciones..."
echo -e "\nexport {" >> "$output_file"
for file in $file_extension; do
  filename=$(basename -- "$file")
  variable_name=$(echo "$filename" | sed -e "s/\.[^.]*$//" -e 's/\-/_/g')
  echo "    $variable_name," >> "$output_file"
done
echo "};" >> "$output_file"

# Volver al directorio original
cd "$current_directory
